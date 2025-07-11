import type { Translation } from '../i18n-types'

const ru = {
  unauthorized: 'Не авторизованный доступ',
  access_denied: 'Доступ запрещен',
  login_to_access: 'Пожалуйста, войдите, чтобы получить доступ',
  email_exist: 'Электронная почта уже зарегистрирована',
  email_invalid: 'Неверный адрес электронной почты',
  email_or_username_required: 'Необходимо указать адрес электронной почты или имя пользователя',
  signup_success_check_email: 'Регистрация прошла успешно. Пожалуйста, проверьте свою электронную почту для подтверждения',
  check_email_to_verify: 'Пожалуйста, проверьте свою электронную почту для подтверждения',
  login_success: 'Авторизация прошла успешна',
  signup_success: 'Регистрация прошла успешно',
  invalid_login_credentials: 'Неверные логин или пароль',
  you_are_banned: 'Aккаунт заблокирован',
  reset_password_email_sent: 'Ссылка для сброса пароля отправлена на вашу почту.',
  passwords_not_matching: 'Пароли не совпадают',
  password_changed_successfully: 'Пароль успешно обновлен',
  you_are_banned_until: 'Aккаунт заблокирован до ',

  created_successfully: 'Успешно создано',
  added_successfully: 'Успешно добавлено',
  updated_successfully: 'Успешно обновлено',
  banned_successfully: 'Успешно заблокировано',
  saved_successfully: 'Успешно сохранено',
  deleted_successfully: 'Успешно удалено',
  sth_went_wrong: 'Что-то пошло не так. Пожалуйста, попробуйте еще раз',

  interior_created: 'Интерьер успешно создан',
  same_name_exists: 'Запись с таким названием уже существует',
  model_in_project: 'Эта модель уже добавлена ​​в проект',

  not_found: 'Не найдено',
  user_404: 'Пользователь не найден',
  interior_404: 'Интерьер не найден',
  interior_model_404: 'Бирка не найдена',
  image_404: 'Изображение не найдено',
  file_404: 'Файл не найдено',
  brand_404: 'Бренд не найден',
  category_404: 'Категория не найдена',
  model_404: 'Модель не найдена',
  project_404: 'Проект не найден',
} satisfies Translation

export default ru
