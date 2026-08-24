type Project = { name: string; profile: string; status: string };
const project: Project = { name: "sable-note-vault-crisp", profile: "0026", status: "ready" };
export function describe(): string {
  return project.name + " / " + project.profile;
}
console.log(describe());
