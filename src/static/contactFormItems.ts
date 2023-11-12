export type ClientInquiryForm = {
  firstName: string;
  lastName: string;
  businessName?: string;
  industry: string;
  email: string;
  phoneNumber?: string;
  websiteURL?: string;
  companyRole?: string;
  businessGoals?: string;
  currentMarketingEfforts: string;
  painPoints: string;
  marketingBudget?: number;
  preferredContactMethod?: string;
  currentMarketingPerformance?: string;
  referralSource?: string;
};

export type Option = {
  value: string;
  text: string;
};

export type ReactHookFormsValidationFields = {
  required?: boolean;
  min?: number;
  max?: number;
  minlength?: number;
  maxLength?: number;
  pattern?: string;
  validate?: any;
};

export interface IContactFormItem {
  label: string;
  id: string;
  className: string;
  type: "text" | "url" | "select" | "textarea";
  options?: Option[];
  validation?: ReactHookFormsValidationFields;
  errorMessages?: any;
}

export const personalContactFormItems: IContactFormItem[] = [
  {
    label: "First Name",
    id: "firstName",
    className: "col-span-6",
    type: "text",
    validation: {
      maxLength: 20,
      required: true,
    },
    errorMessages: {
      maxLength: "Cannot exceed more than 20 characters.",
      required: "Enter your first name.",
    },
  },
  {
    label: "Last Name",
    id: "lastName",
    className: "col-span-6",
    type: "text",
    validation: {
      maxLength: 20,
      required: true,
    },
    errorMessages: {
      maxLength: "Cannot exceed more than 20 characters.",
      required: "Enter your last name.",
    },
  },
  {
    label: "Email",
    id: "email",
    className: "col-span-6",
    type: "text", // 'email' type for proper validation
    validation: {
      required: true,
    },
    errorMessages: {
      required: "Enter your email.",
    },
  },
  {
    label: "Phone Number",
    id: "phoneNumber",
    className: "col-span-6",
    type: "text", // 'tel' type for phone numbers
    validation: {
      required: false,
    },
  },
];

export const businessContactFormItems: IContactFormItem[] = [
  {
    label: "Business Name",
    id: "businessName",
    className: "col-span-6",
    type: "text",
    validation: {
      required: true,
    },
    errorMessages: {
      required: "Enter your business name.",
    },
  },
  {
    label: "Industry",
    id: "industry",
    className: "col-span-6",
    type: "select",
    options: [
      { value: "", text: "Select your industry" },
      { value: "generalContractors", text: "General Contractors" },
      { value: "roofing", text: "Roofing" },
      { value: "homeRemodeling", text: "Home Remodeling" },
      { value: "landscaping", text: "Landscaping" },
      { value: "dental", text: "Dental Practices" },
      { value: "medical", text: "Medical Clinics" },
      { value: "legal", text: "Legal Services" },
      { value: "restaurant", text: "Restaurants" },
      { value: "electrical", text: "Electrical" },
      { value: "hvac", text: "HVAC Services" },
      { value: "accounting", text: "Accounting & Tax Services" },
    ],
    validation: {
      required: true,
    },
    errorMessages: {
      required: "Select your business industry.",
    },
  },
  {
    label: "Company Role",
    id: "companyRole",
    className: "col-span-6",
    type: "select",
    options: [
      { value: "", text: "Select your role" },
      { value: "owner", text: "Owner/Proprietor" },
      { value: "ceo", text: "CEO (Chief Executive Officer)" },
      { value: "cfo", text: "CFO (Chief Financial Officer)" },
      { value: "cto", text: "CTO (Chief Technology Officer)" },
      { value: "cmo", text: "CMO (Chief Marketing Officer)" },
      { value: "coo", text: "COO (Chief Operating Officer)" },
      { value: "president", text: "President" },
      { value: "vicePresident", text: "Vice President" },
      { value: "director", text: "Director" },
      { value: "manager", text: "Manager" },
      { value: "boardMember", text: "Board Member" },
      { value: "partner", text: "Partner" },
      { value: "businessDevelopment", text: "Business Development" },
      { value: "executiveAssistant", text: "Executive Assistant" },
      { value: "seniorConsultant", text: "Senior Consultant" },
      { value: "other", text: "Other (Decision-Making Role)" },
    ], // Add options here
    validation: {
      required: true,
    },
    errorMessages: {
      required: "Select your role in the company.",
    },
  },
  {
    label: "Website URL",
    id: "websiteURL",
    className: "col-span-6",
    type: "text",
  },

  {
    label: "Business Goals",
    id: "businessGoals",
    className: "col-span-6",
    type: "textarea",
  },
  {
    label: "Pain Points",
    id: "painPoints",
    className: "col-span-6",
    type: "textarea",
  },
];

export const businessMarketingContactFormItems: IContactFormItem[] = [
  {
    label: "Current Marketing Efforts",
    id: "currentMarketingEfforts",
    className: "col-span-6",
    type: "select",
    options: [
      { value: "", text: "Select an best option" },
      {
        value: "high",
        text: "High — Investing in multiple platforms with high optimization",
      },
      {
        value: "medium",
        text: "Medium — One or two platforms with considerable effort",
      },
      { value: "low", text: "Low — One platform with inconsistent efforts" },
      { value: "none", text: "None — I do not do marketing" },
    ], // Add options here
    validation: {
      required: true,
    },
    errorMessages: {
      required: "Select an option.",
    },
  },
  {
    label: "Marketing Budget",
    id: "marketingBudget",
    className: "col-span-6",
    type: "select",
    options: [
      { value: "", text: "Select an best option" },
      { value: ">$5,000", text: "> $5,000 / month" },
      { value: ">$3,000", text: "> $3,000 / month" },
      { value: ">$2,000", text: "> $2,000 / month" },
      { value: ">$1,000", text: "> $1,000 / month" },
    ], // Add options here
    validation: {
      required: true,
    },
    errorMessages: {
      required: "Select an option.",
    },
  },
  {
    label: "Current Marketing Performance",
    id: "currentMarketingPerformance",
    className: "col-span-6",
    type: "select",
    options: [
      { value: "", text: "Select an best option" },
      { value: "great", text: "Great! Expected outcome from our efforts" },
      { value: "medium", text: "Could be better." },
      { value: "horrible", text: "Horrible. Money draining for no results" },
    ], // Add options here
    validation: {
      required: true,
    },
    errorMessages: {
      required: "Select an option.",
    },
  },
  {
    label: "Preferred Contact Method",
    id: "preferredContactMethod",
    className: "col-span-6",
    type: "select",
    options: [
      { value: "", text: "Select an best option" },
      { value: "email", text: "Email" },
      { value: "phone", text: "Phone" },
      { value: "emailOrPhone", text: "Email or Phone" },
    ], // Add options here
    validation: {
      required: true,
    },
    errorMessages: {
      required: "Select an option.",
    },
  },
  {
    label: "How did you hear about us?",
    id: "referralSource",
    className: "col-span-6",
    type: "select",
    options: [
      { value: "", text: "Select an best option" },
      { value: "facebook", text: "Facebook" },
      { value: "google", text: "Google" },
      { value: "referral", text: "Referred" },
      { value: "organic", text: "Organic Search" },
    ], // Add options here
    validation: {
      required: true,
    },
    errorMessages: {
      required: "Select an option.",
    },
  },
];
