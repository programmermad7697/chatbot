import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">ChatBOT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain about the universe"</p>
            <p className="infoText">"What will happen to the world by 2030?"</p>
            <p className="infoText">
              "What will happen to the sun in a million years?"
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Almost similar to ChatGPT</p>
            <p className="infoText">
              Notifications when ChatBOT is generating response
            </p>
            <p className="infoText">Messages are stored in Firebase database</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              May occasionally give incorrect information
            </p>
            <p className="infoText">May occasionally produce harmful content</p>
            <p className="infoText">
              May occasionally find difficulty to generate response
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
