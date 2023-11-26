interface BrandProps {
  source: any;
}

const Brand = ({ source }: BrandProps) => {
  return <img src={source} alt="brand logo" />;
};

export default Brand;
