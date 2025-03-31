import SocialIcons from "../components/SocialIcons";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div className="p-8 flex flex-col gap-2 items-center text-xl">
        <p className="mb-4">
          Hey there! Darren here, thanks for stopping by!{" "}
        </p>
        <p>I&apos;m still working hard on the website...</p>
        <p>In the meantime, feel free to explore and get to know me through:</p>
        <SocialIcons />
      </div>
    </div>
  );
}
