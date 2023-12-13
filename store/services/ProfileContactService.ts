export interface UserProfileContactProps {
  workEmail: string;
  personalEmail: string;
  workPhone: string;
  mobilePhone: string;
  residencePhone: string;
  skypeNumber: string;
  linkedinUrl: string;
}

const create = (
  data: UserProfileContactProps
): Promise<{ data: UserProfileContactProps }> => {
  return Promise.resolve({ data: data });
};

const ProfileContactService = {
  create,
};

export default ProfileContactService;
