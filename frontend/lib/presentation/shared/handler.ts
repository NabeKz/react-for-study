export const handleRequest = async (
  command: () => Promise<void>,
  callback: () => void,
  errorHandler?: (e: unknown) => void
) => {
  try {
    await command();
    callback();
  } catch (e) {
    if (!errorHandler) {
      throw e
    }
    errorHandler(e)
  }
};

export const handleUpdate = async (
  command: () => Promise<void>,
  callback: () => void,
  errorHandler?: (e: unknown) => void
) => {
  try {
    await command();
    callback();
  } catch (e) {
    if (!errorHandler) {
      throw e
    }
    errorHandler(e)
  }
};
