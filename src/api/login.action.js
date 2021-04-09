export const login = async ({ email, password }) => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    localStorage.setItem('stk', 'authorisedstk')

    return {
        Code: 0
    }
}