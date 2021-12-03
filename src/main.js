import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import { promisify } from "util";
import { fileURLToPath } from "url";
import { execa } from "execa";
import Listr from "listr";
import { projectInstall } from "pkg-install";

const access = promisify(fs.access);
const copy = promisify(ncp);

async function initGit(options) {
  const result = exec("git", ["init"], {
    cwd: options.targetDirectory,
  });
  if (result.failed) {
    return Promise.reject(new Error("Failed to initialize Git"));
  }
  return;
}

async function copyTemplateFiles(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}

export async function createProject(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };

  const currentFileUrl = import.meta.url;
  console.log("currentFileUrl", currentFileUrl);
  const templateDir = path.resolve(
    fileURLToPath(import.meta.url),
    "../../templates",
    options.template.toLowerCase()
  );

  console.log("templateDir", templateDir);
  options.templateDirectory = templateDir;

  try {
    await access(templateDir, fs.constants.R_OK);
  } catch (err) {
    console.error("%s Invalid template name", chalk.red.bold("ERROR"));
    process.exit(1);
  }

  console.log("Copying project files...");
  await copyTemplateFiles(options);

  console.log("%s Project read", chalk.green.bold("DONE"));
  return true;
}
