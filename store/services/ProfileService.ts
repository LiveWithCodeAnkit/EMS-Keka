export interface UserProfileProps {
  firstName: string;
  middleName: string;
  lastName: string;
  displayName: string;
  gender: string;
  dob: string;
  maritalStatus: string;
  bloodGroup: string;
  physicalStatus: string;
}
const create = (data: any): Promise<{ data: UserProfileProps }> => {
  return Promise.resolve({ data: data });
};

const ProfileService = {
  create,
};

export default ProfileService;
