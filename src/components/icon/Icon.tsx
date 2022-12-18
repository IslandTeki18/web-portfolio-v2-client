import * as React from "react";

type IconProps = {
  className: string,
  margin?: string,
  padding?: string,
  color?: string,
  size?: number,
  paddingTop?: string,
  paddingBottom?: string,
  paddingLeft?: string,
  paddingRight?: string,
  marginTop?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string,
}

export const Icon = (props: IconProps) => {
  const styles = {
    marginLeft: props.marginLeft,
    marginRight: props.marginRight,
    marginTop: props.marginTop,
    marginBottom: props.marginBottom,
    paddingLeft: props.paddingLeft,
    paddingRight: props.paddingRight,
    paddingTop: props.paddingTop,
    paddingBottom: props.paddingBottom,
    margin: props.margin,
    padding: props.padding,
    color: props.color,
    fontSize: props.size,
  };
  return <i className={`dkIcon ${props.className}`} style={styles} />;
};

Icon.defaultProps = {
  className: "",
};
