export type ColumnProps = ColumnBasicProps & ColumnVisibleProps;
export type ColumnBasicProps = {
  label?: string;
  field: string;
};
export type ColumnVisibleProps = {
  visible?: boolean;
};
