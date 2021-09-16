import Projects from "@/json/Project_multi.json";

export class LocalDB{

  load() {
    const localInvestment = localStorage.getItem('investments');

    this.projects = Projects.value;
    if (localInvestment) {
      this.investments = JSON.parse(localInvestment);
    } else {
      this.investments = [];
    }
  }

  write(table, item) {
    this[table].push(item);
  }

  save() {
    // const stringProjects = JSON.stringify(this.projects);
    const stringInvestments = JSON.stringify(this.investments);

    // localStorage.setItem('projects', stringProjects);
    localStorage.setItem('investments', stringInvestments);
  }

  clear() {
    // localStorage.removeItem('projects')
    localStorage.removeItem('investments');
  }
}