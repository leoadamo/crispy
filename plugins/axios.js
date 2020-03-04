export default (
  { $axios, error },
  inject
) => {
  inject(
    'get',
    async (endpoint, main) => {
      try {
        const res = await $axios.$get(
          endpoint
        )

        return res
      } catch (err) {
        const message = err.response
          ? err.response
          : err

        const status =
          err.response &&
          err.response.status
            ? err.response.status
            : 500

        console.log(message)
        if (main) {
          error({ statusCode: status })
        }
      }
    }
  )
}
