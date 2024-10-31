/** @format */

type CounterCardProps = {
  title: string;
  count: number;
};

type EventCardProps = {
  title: string;
  icon: ReactNode;
  description: string;
};

type SpeakerProps = {
  name: string;
  title: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    twitter: string;
    linkedin: string;
    github: string;
  };
};

type ArticleProps = {
  title: string;
  body: string;
};

type OptionsProps = {
  label: string;
  value: string;
};

type FormeState = {
  success?: boolean;
  data?: any;
  errors?: {
    [key: string]: string[];
  };
};
