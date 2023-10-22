import { Container } from "@/components/containers/Container";
import { StyledLink } from "@/components/ui/StyledLink";

export const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-50 py-3">
      <Container>
        <nav className={"flex gap-4 justify-center"}>
          <StyledLink href={"/"}>Home</StyledLink>
          <StyledLink href={"/products-saleor"}>Saleor</StyledLink>
          <StyledLink href={"/products-shopify"}>Shopify</StyledLink>
        </nav>
      </Container>
    </div>
  );
};
