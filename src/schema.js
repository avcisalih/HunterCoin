import { yupToFormErrors } from 'formik';
import * as yup from 'yup';


const regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

export const schema = yup.object().shape({
email: yup.string().email("E-Posta Geçerli bir formatta olmalı !").required("E-Posta zorunlu bir alan !"),

age: yup.number().min(18, "Yaşınız 18'den küçük olamaz").max(100, "Yaşınız 100'den büyük olamaz").integer("Lütfen Tam sayı değeri giriniz !").required("Yaş zorunlu bir alan !"),

password: yup
.string()
.min(5, 'Şifreniz en az 5 karakter olmalı')
.matches(regex, 'Şifreniz yeterince güçlü değil')
.required('Şifre zorunlu bir alan'),


passwordConfirm: yup
.string()
.oneOf([yup.ref('password')], 'Onay şifreniz eşleşmiyor')
.required('Lütfen şifrenizi onaylayın')

});