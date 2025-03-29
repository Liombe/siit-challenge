import styled from "styled-components";

function AvatarComponent({
  className,
  src,
  ...rest
}: {
  className: string;
  src: string;
}) {
  return (
    <div className={className} {...rest}>
      <img src={src} />
    </div>
  );
}

export const Avatar = styled(AvatarComponent)`
  img {
    --_size: var(--avatar-size, 2.5rem);
    border-radius: 0.25rem;
    object-fit: cover;
    object-position: center;
    width: var(--_size);
    height: var(--_size);
  }
`;
