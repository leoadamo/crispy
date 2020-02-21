export const get = async (
  { $axios, error },
  endpoint,
  main = false
) => {
  try {
    const { data } = await $axios.get(
      endpoint
    )

    return data
  } catch (err) {
    console.log(err)
    if (main) {
      error({ statusCode: 500 })
    }
  }
}
