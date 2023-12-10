import { UserButton } from "@clerk/nextjs";

const ProfileButton = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default ProfileButton
