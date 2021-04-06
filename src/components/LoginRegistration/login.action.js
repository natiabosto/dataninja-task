export const login = async ({ email, password }) => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    localStorage.setItem('STK', 'authorisedSTK')

    return {
        Code: 0
    }
}