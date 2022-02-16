interface IThemes {
  [key: number]: { [key: string]: string };
}

const themes: IThemes = {
  5: {
    fontSize: "20px",
    lineHeight: "24px",
  },
};

export default themes;
