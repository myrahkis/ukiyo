const size = {
  "extra-small": "575px",
  small: "767px",
  medium: "991px",
  large: "1199px",
};

export const device = {
  mobile: `(max-width: ${size["extra-small"]})`,
  tablet: `(max-width: ${size.small})`,
  laptop: `(max-width: ${size.medium})`,
  desktop: `(max-width: ${size.large})`,
};
