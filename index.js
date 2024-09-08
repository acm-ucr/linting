import { setFailed, info, error } from "@actions/core";
import { getExecOutput } from "@actions/exec";

const linting = async () => {
  const { stdout } = await getExecOutput("npm i eslint -D");
  info(stdout);

  try {
    const { stdout } = await getExecOutput("npm run eslint");
    info(stdout);
  } catch (err) {
    error(err);
    setFailed(
      "Your code is not linted correctly. Please format using `npm run eslint` and address the problems",
    );
  }
};

await linting();
