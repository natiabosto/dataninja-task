export const register = async ({ email, password, retypePassword }) => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return {
        Code: 0
    }
}