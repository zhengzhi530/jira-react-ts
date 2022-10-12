import React from "react";
import { User } from "screens/project-list/searchPanel";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organiaztion: string;
}

interface LisProps {
  list: Project[];
  users: User[];
}

export function List({ list, users }: LisProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>负责人</th>
          </tr>
        </thead>
        <tbody>
          {list.map((project) => (
            <tr key={project.personId}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id === project.personId)?.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
