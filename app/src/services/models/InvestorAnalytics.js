class InvestorAnalytics{
  constructor(data = {}) {
    this.userId = data.APPUSER_ID ?? '';
    this.blocks = data.BLOCKSPURCHASED ?? 0;
    this.totalGross = data.TOTALGROSS ?? 0;
    this.totalNet = data.TOTALNET ?? 0;
  }
}

export default InvestorAnalytics;