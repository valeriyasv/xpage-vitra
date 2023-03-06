const inputFooter = document.querySelector('.footer__mail-input');
inputFooter.addEventListener('change', (e) => {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });
  console.log(schema)
})
