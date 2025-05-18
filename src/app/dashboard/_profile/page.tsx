async function Profile({ params }: { params: Promise<{ profile: string }> }) {
  const { profile } = await params;
  console.log(profile);

  return <h1 className="text-[3rem]">PROFILE page here</h1>;
}

export default Profile;
