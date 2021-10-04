class DashboardAnalytics{
  constructor(project, analytics) {
    this.id = project.ID ?? '';
    this.name = project.Name ?? '';
    this.banner = project.Banner_Type || `${process.env.PUBLIC_URL}/assets/ngo-project-1.jpeg`;
    this.actualTrees = analytics.TOTALBLOCKSPURCHASED ?? 0;
    this.goalTrees = analytics.TOTALPLANTINGCAPACITY ?? 0;
    this.invested = analytics.TOTALNET ?? 0;
  }

  toMap() {
    return {
      id: this.id,
      name: this.name,
      banner: this.banner,
      actualTrees: this.actualTrees,
      goalTrees: this.goalTrees,
      invested: this.invested,
    };
  }
}

export default DashboardAnalytics;