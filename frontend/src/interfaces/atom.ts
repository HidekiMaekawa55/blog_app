export interface LinkButtonProps {
  href: string;
};

export interface ClickButtonProps {
  onClick: () => void;
};

export interface SubmitButtonProps {
  onSubmit: () => void;
  buttonName: string;
};
