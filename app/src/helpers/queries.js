const generateSummary = (query) => {
  const summary = {
    Investments: 0,
    Trees: 0,
    Tree_cost: 0,
  };

  query.forEach(item => {
    summary.Investments += item.Amount;
    summary.Trees += item.Unit;
    summary.Tree_cost += item.CostPerUnit;
  });
  if (query.length > 0) {
    summary.Tree_cost /= query.length;
  }

  return summary
}

const investmentsByProject = (query) => {
  const projectsInvestment = {};
  query.forEach(item => {
    if (item.Recipient_ID in projectsInvestment) {
      let project = projectsInvestment[item.Recipient_ID];
      project.Total += item.Amount;
      project.Trees += item.Unit;
    } else {
      Object.assign(projectsInvestment, {[item.Recipient_ID]: {Total: item.Amount, Trees: item.Unit}});
    }
  });

  return projectsInvestment;
};

export const investmentByProject = (projectId, investments) => {
  const query = investments.filter(investment => investment.Recipient_ID === projectId);
  return generateSummary(query);
};

export const investmentByUser = (userId, investments) => {
  const query = investments.filter(investment => investment.Sender_ID === userId);
  return generateSummary(query);
};

export const investmentByNGO = (userId, investments) => {
  const query = investments.filter(investment => investment.Owner_ID === userId);
  return generateSummary(query);
};

export const investmentByNGOProject = (ngoId, investments, projects) => {
  const projectsQuery = projects.filter(project => project.Owner_ID === ngoId);
  const investmentsQuery = investments.filter(investment => investment.Owner_ID === ngoId);
  const ngoProjectsInvestment = investmentsByProject(investmentsQuery);
  projectsQuery.forEach(project => {
    if (project.ID in ngoProjectsInvestment) {
      project.Total = ngoProjectsInvestment[project.ID].Total;
      project.Trees = ngoProjectsInvestment[project.ID].Trees;
    } else {
      project.Total = 0;
      project.Trees = 0;
    }
  });
  return projectsQuery;
};


export const investmentByUserProject = (userId, investments, projects) => {
  const investmentsQuery = investments.filter(investment => investment.Sender_ID === userId);
  const investedProjectsByUser = investmentsByProject(investmentsQuery);
  const userProjects = projects.map(project => {
    if (project.ID in investedProjectsByUser) {
      project.Total = investedProjectsByUser[project.ID].Total;
      project.Trees = investedProjectsByUser[project.ID].Trees;
      return project;
    }
    return null;
  });

  return userProjects.filter(project => project !== null);
};