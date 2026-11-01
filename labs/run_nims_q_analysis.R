# ==============================================================================
# NIMS 핵심 현장지휘 관리원칙 Q-방법론 실증 분석 자동화 스크립트
# 연구책임자: 강석균 (2678125)
# 분석 환경: R (qmethod v1.8.4, psych, jsonlite, dplyr)
# ==============================================================================

# 1. 필수 패키지 자동 설치 및 로드
required_packages <- c("jsonlite", "psych", "qmethod", "dplyr")
for (pkg in required_packages) {
  if (!requireNamespace(pkg, quietly = TRUE)) {
    install.packages(pkg, dependencies = TRUE)
  }
  suppressPackageStartupMessages(library(pkg, character.only = TRUE))
}

cat("==================================================================\n")
cat("   NIMS 현장지휘 관리원칙 Q-방법론 R 자동 분석 파이프라인 시작    \n")
cat("==================================================================\n\n")

# 2. 데이터 파일 탐색 및 작업 경로 설정
data_dir <- "labs/data"
if (!dir.exists(data_dir)) {
  # 만약 labs 폴더 안에서 실행 중인 경우
  if (dir.exists("data")) data_dir <- "data"
  else stop("JSON 데이터 폴더(labs/data)를 찾을 수 없습니다.")
}

json_files <- list.files(data_dir, pattern = "[.]json$", full.names = TRUE)
cat(sprintf("[1] 수집된 JSON 응답 파일: 총 %d개 발견\n", length(json_files)))

if (length(json_files) < 2) {
  stop("요인분석을 수행하기 위해 최소 2개 이상의 JSON 데이터가 필요합니다.")
}

# 3. JSON 데이터 파싱 및 Q-소팅 매트릭스 구축
p_names <- c()
scores_matrix <- data.frame(matrix(ncol = length(json_files), nrow = 36))
interviews_list <- list()

for (i in seq_along(json_files)) {
  res <- fromJSON(json_files[i])
  clean_id <- paste0(res$respondent$id, "_", substr(res$respondent$group, 1, 6))
  p_names <- c(p_names, clean_id)
  
  # 36개 진술문 배치 점수 (-4 ~ +4)
  scores_matrix[, i] <- res$scoresArray
  
  # 정성적 인터뷰 텍스트 추출
  interviews_list[[clean_id]] <- list(
    id = res$respondent$id,
    group = res$respondent$group,
    exp = res$respondent$experience,
    pos_items = paste(res$qualitativeInterview$positiveStatements, collapse = ", "),
    pos_reason = res$qualitativeInterview$positiveReason,
    neg_items = paste(res$qualitativeInterview$negativeStatements, collapse = ", "),
    neg_reason = res$qualitativeInterview$negativeReason,
    comments = res$qualitativeInterview$freeComments
  )
}

colnames(scores_matrix) <- p_names
rownames(scores_matrix) <- sprintf("Q%02d", 1:36)

# 4. P-표본 간 피어슨 상관행렬 (Correlation Matrix) 계산
cat("\n[2] P-표본 간 상관행렬 (Correlation Matrix):\n")
cor_mat <- cor(scores_matrix)
print(round(cor_mat, 3))

# 5. 주성분 분석 (PCA) 및 스크리 검정 (고유값 산출)
pca_unrot <- principal(scores_matrix, nfactors = min(3, ncol(scores_matrix)), rotate = "none")
cat("\n[3] 초기 주성분 고유값(Eigenvalues) 및 설명변량:\n")
cat("고유값 (Eigenvalues):", round(pca_unrot$values[1:min(5, ncol(scores_matrix))], 3), "\n")
print(round(pca_unrot$Vaccounted, 3))

# 6. qmethod 패키지 기반 요인분석 및 Varimax 회전 수행
# 강제분포 척도: -4(2), -3(3), -2(4), -1(5), 0(8), +1(5), +2(4), +3(3), +4(2)
distrib <- c(-4, -4, -3, -3, -3, -2, -2, -2, -2, -1, -1, -1, -1, -1, 
              0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  
              2,  2,  2,  2,  3,  3,  3,  4,  4)

# 최적 요인 수 설정 (현재 N=5 기준 2개 요인 추출)
n_factors <- 2
cat(sprintf("\n[4] %d개 요인 배리맥스(Varimax) 직교 회전 수행 중...\n", n_factors))

qm_res <- qmethod(scores_matrix, nfactors = n_factors, rotation = "varimax", distribution = distrib)

# 7. 요인 부하량(Factor Loadings) 및 P-표본 플래깅 결과
cat("\n[5] P-표본 요인 부하량 (Factor Loadings) 및 배속 현황:\n")
print(round(qm_res$loa, 3))

# 8. 요인별 상위(최동의) 및 하위(최기피) 진술문 Z-점수
cat("\n==================================================================\n")
cat("                 요인별 핵심 Z-점수 극단 진술문                    \n")
cat("==================================================================\n")

for (f in 1:n_factors) {
  col_name <- paste0("zsc_f", f)
  z_scores <- qm_res$zsc[, col_name]
  names(z_scores) <- rownames(qm_res$zsc)
  
  cat(sprintf("\n▶ [제%d요인] 최동의 진술문 Top 5 (Z-Score):\n", f))
  print(round(sort(z_scores, decreasing = TRUE)[1:5], 3))
  
  cat(sprintf("▶ [제%d요인] 최기피 진술문 Bottom 5 (Z-Score):\n", f))
  print(round(sort(z_scores, decreasing = FALSE)[1:5], 3))
}

# 9. 결과 파일 자동 저장 (CSV 및 텍스트)
out_dir <- "labs/output"
if (!dir.exists(out_dir)) dir.create(out_dir, recursive = TRUE)

write.csv(scores_matrix, file.path(out_dir, "Q_Sort_Raw_Matrix.csv"))
write.csv(round(cor_mat, 3), file.path(out_dir, "Correlation_Matrix.csv"))
write.csv(round(qm_res$loa, 3), file.path(out_dir, "Factor_Loadings.csv"))
write.csv(round(qm_res$zsc, 3), file.path(out_dir, "Factor_Zscores.csv"))
write.csv(qm_res$qdc, file.path(out_dir, "Consensus_Distinguishing.csv"))

# 정성 인터뷰 통합 CSV 저장
interview_df <- do.call(rbind, lapply(interviews_list, as.data.frame))
write.csv(interview_df, file.path(out_dir, "Qualitative_Interviews.csv"), fileEncoding = "UTF-8")

cat("\n==================================================================\n")
cat(sprintf("✓ 모든 분석이 성공적으로 완료되었습니다!\n✓ 분석 결과표(CSV)가 '%s/' 폴더에 자동 저장되었습니다.\n", out_dir))
cat("==================================================================\n")
