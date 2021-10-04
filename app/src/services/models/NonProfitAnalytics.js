class NonProfitAnalytics{
  constructor(data = {}) {
    this.userId = data.APPUSER_ID ?? '';
    this.followers = data.FOLLOWERCOUNT ?? 0;
    this.investors = data.INVESTORCOUNT ?? 0;
    this.treesPlanted = data.TOTALTREESPLANTED ?? 0;
    this.offsetTCO2E = data.TOTALOFFSETEXPECTED_TCO2E ?? 0;
    this.costAverage = data.SOWCOSTAVERAGE ?? 0;
    this.conservationCost = data.CONSERVATIONCOST ?? 0;
    this.totalGross = data.TOTALGROSS ?? 0;
    this.totalNet = data.TOTALNET ?? 0;
  }
}

export default NonProfitAnalytics;