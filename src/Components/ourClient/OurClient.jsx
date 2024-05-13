import { BsFillStarFill } from "react-icons/bs";

const OurClient = () => {
  return (
    <div className="space-y-3 py-5 max-w-screen-xl	 mx-auto md:px-10">
      <h1 className="text-center md:text-4xl text-3xl font-bold">
        What our clients are saying
      </h1>
      <p className="text-center ">
        Showing companies based on reviews and recent job openings
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 pt-8 gap-6">
        <div className="p-4 shadow hover:shadow-xl rounded bg-white space-y-3  transition-all">
          <p className="text-justify text-gray-400">
            {" "}
            <span className="text-5xl text-[#4CCE5B] font-bold">“</span> "At
            vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa.”
          </p>
          <div className="flex justify-start items-center gap-5">
            <img
              className="w-[50px] border rounded-full"
              src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/442391856_1745034932574576_3891416978624244912_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGHqITpthcLju4S2oWLC22hADzMECgBJlUAPMwQKAEmVc6Azx2vQsrzK-W0m2-fHM76SNwfCTlNER1SIjNsRp0W&_nc_ohc=R7632OevhTAQ7kNvgEFgfbn&_nc_oc=Adi9lJ5WBgZoexjgNqq06onoypYzK0f64BJmZOZPtijQXOfD578UwRz8LS2gQ3i8ZGA&_nc_ht=scontent.fdac110-1.fna&oh=00_AYCTsH9jV0x4rOilO3Mk0fEBHUWSO_fjVzpsxuyXxK1Y3g&oe=6646880D"
              alt=""
            />
            <div>
              <h1 className="text-lg font-bold">Mustafizur Rahaman</h1>
              <h1 className="text-md font-medium">Hardware Engineer</h1>
              <p className="flex gap-1 text-orange-400">
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 shadow rounded bg-white space-y-3 hover:shadow-xl transition-all">
          <p className="text-justify text-gray-400">
            {" "}
            <span className="text-5xl text-[#4CCE5B] font-bold">“</span> Begin
            by ensuring that you fully understand the client's request. Ask for
            detailed information, including the type of content or services they
            need, their specific requirements, deadlines, and any other relevant
            details.
          </p>
          <div className="flex justify-start items-center gap-5">
            <img
              className="w-[50px] border rounded-full"
              src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/431786570_122130198416157470_1839692154937296938_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGLFazui62LiZGaP1lj6d5Trh9O0wcCX6CuH07TBwJfoIJJ7I25n6T_TXeQw625ljUH9gCcMDNjk8G3_qLXoq9m&_nc_ohc=6TRnQZJw214Q7kNvgEUcoLE&_nc_ht=scontent.fdac110-1.fna&oh=00_AYChn6Hia6U9-1TTNzXGOdpeOTImqC2yBMK_3Adm3LKjLw&oe=664680D0"
              alt=""
            />
            <div>
              <h1 className="text-lg font-bold">Sadiya Ayman</h1>
              <h1 className="text-md font-medium">Model</h1>
              <p className="flex gap-1 text-orange-400">
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 shadow rounded bg-white space-y-3 hover:shadow-xl transition-all">
          <p className="text-justify text-gray-400 ">
            {" "}
            <span className="text-5xl text-[#4CCE5B] font-bold">“</span> Discuss
            the terms of the engagement, including pricing, payment terms,
            milestones, and any contractual agreements. It's crucial to have a
            clear understanding of expectations and ensure both parties are in
            agreement.
          </p>
          <div className="flex justify-start items-center gap-5">
            <img
              className="w-[50px] border rounded-full"
              src={
                "https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-1/434860597_2150551588630747_4128629531948361359_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG752eLAYnMRidfasAGuD7BPmdVuPBWsrY-Z1W48FaytmYV9t0nmcEEDSrSFC2pRn-xKKeqj2mbYML22GA0jiz7&_nc_ohc=KyD_QUjAhNIQ7kNvgEdGSWa&_nc_ht=scontent.fdac110-1.fna&oh=00_AYA_keO2eIDL5URSZY2TuAi-qMjesWUboiu5qQO9iIopUA&oe=66467AA5"
              }
              alt=""
            />
            <div>
              <h1 className="text-lg font-bold">Abu Rishad Rony </h1>
              <h1 className="text-md font-medium">Web Developer</h1>
              <p className="flex gap-1 text-orange-400">
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
