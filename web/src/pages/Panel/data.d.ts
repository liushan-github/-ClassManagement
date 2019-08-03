export interface PanelDataType {
  totalStudents: number;
  girl: number;
  boy: number;
  avgAge: number,
  ageData: object[],
  beginDate: string,
  statisticsDate: string,
  jobData: object[],
  getJobDate: object[],
  rankingListData: object[],
  cityData: object[],
  sortCity: object[],
}

export interface AnalysisData {
  topRowData: PanelDataType[];
}
