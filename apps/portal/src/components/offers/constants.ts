export const HOME_URL = '/offers';

export const JobTypeLabel = {
  FULLTIME: 'Full-time',
  INTERN: 'Internship',
};

export const emptyOption = {
  label: '',
  value: '',
};

export enum FieldError {
  NON_NEGATIVE_NUMBER = 'Please fill in a non-negative number in this field.',
  NUMBER = 'Please fill in a number in this field.',
  REQUIRED = 'Please fill in this field.',
}

export const OVERALL_TAB = 'Overall';

export enum ProfileDetailTab {
  ANALYSIS = 'Offer Engine Analysis',
  BACKGROUND = 'Background',
  OFFERS = 'Offers',
}

export const profileDetailTabs = [
  {
    label: ProfileDetailTab.OFFERS,
    value: ProfileDetailTab.OFFERS,
  },
  {
    label: ProfileDetailTab.BACKGROUND,
    value: ProfileDetailTab.BACKGROUND,
  },
  {
    label: ProfileDetailTab.ANALYSIS,
    value: ProfileDetailTab.ANALYSIS,
  },
];