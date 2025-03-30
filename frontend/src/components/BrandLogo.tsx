import styled from "styled-components";

export const BrandLogo = styled(BrandLogoComponent)`
  height: auto;
`;

function BrandLogoComponent() {
  return (
    <img
      width={100}
      src="https://cdn.prod.website-files.com/6214ee30440885a599757664/6475eba371a4c1f6c8f209d5_logo_menu.png"
    />
  );
}
