interface IThemes {
  [key: number]: { [key: string]: string };
}

const themes: IThemes = {
  16: {
    fontSize: "16px",
    lineHeight: "19px",
  },
  10: {
    fontSize: "10px",
    lineHeight: "12px",
  },
};

export default themes;
