export interface PanelDataType {
  totalStudents: number;
  girl: number;
  boy: number;
  avgAge: number,
  ageData: Array<object>,
  beginDate: string,
  statisticsDate: string,
  jobData: Array<object>,
  getJobDate: Array<object>,
  rankingListData: Array<object>,
  cityData: Array<object>,
  sortCity: Array<object>,
}

export interface AnalysisData {
  topRowData: PanelDataType[];
}
