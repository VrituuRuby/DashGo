import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";

export function SidebarNav(){
  return(
    <Stack spacing='12' align='flex-start'>
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Users</NavLink>
      </NavSection>
      <NavSection title='AUTOMATION'>
        <NavLink icon={RiInputMethodLine}>Forms</NavLink>
        <NavLink icon={RiGitMergeLine}>Automate</NavLink>
      </NavSection>
    </Stack>
  )
}