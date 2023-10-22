import { Container } from "@/ui/components/Container";
import { StyledLink } from "@/ui/components/StyledLink";

export const Header = () => {
  return (
    <div className="bg-gray-900 py-3">
      <Container>
        <nav className={"flex gap-4 justify-center"}>
          <StyledLink href={"/"}>Home</StyledLink>
        </nav>
      </Container>
    </div>
  );
};
