export default function userProfilePage({ params }: any) {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-300 ">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl font-bold ">
        welcome user
        <span className="p-2 text-2xl font-bold bg-gradient-to-bl from-gray-300 to-gray-600 rounded-lg">
          {" "}
          {params.id}
        </span>
      </p>
    </div>
  );
}
