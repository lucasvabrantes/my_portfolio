import { StyledSidebar } from "../Sidebar/style";

interface SidebarProps {
    isOpen: boolean;
}
export const Sidebar = ({ isOpen }: SidebarProps) => {
    return (
        <StyledSidebar isOpen={isOpen}>
            <a href="#about">Sobre</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Projetos</a>
            <a href="#contact">Contato</a>
        </StyledSidebar>
    );
};
