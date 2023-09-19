import Image from 'next/image';
import ProfilePic from '../public/images/KevinJZea_Profile.jpg';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col sm:flex-row items-center justify-center gap-10 p-12 text-light-white">
      <Image
        alt="Kevin J. Zea's profile pic"
        className="rounded-full w-60 sm:w-auto max-w-xs"
        src={ProfilePic}
      />
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-3xl text-center">Hi! 👋 I&apos;m Kevin J. Zea</h1>
        <p className="text-justify text-lg">
          Frontend Developer with over 2 years of experience in the tech
          industry. Passionate about crafting visually captivating,
          user-centric, and accessible software applications. Seeking for
          building digital experiences that are not only visually appealing but
          also inclusive for all users.
        </p>
      </div>
    </main>
  );
};

export default Home;
