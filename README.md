# test_task

Создать JSON API для сайта объявлений
Необходимо создать сервис для хранения и подачи объявлений. Объявления должны храниться в базе данных. Сервис должен предоставлять API, работающее поверх HTTP в формате JSON.
Требования
язык: Node.js (express).
база данных на выбор: PostgreSQL/MySQL/MongoDB.
код должен быть выложен на github
3 метода: получение списка объявлений, получение одного объявления, создание объявления

валидация полей (не больше 3 ссылок на фото, описание не более 1000 символов, название не больше 200 символов)

Метод получения списка объявлений
нужна пагинация, на одной странице должно присутствовать 10 объявлений
нужна возможность сортировки: по цене (возрастание/убывание) и по дате создания (возрастание/убывание)
поля в ответе: название объявления, ссылка на главное фото (первое в списке), цена

Метод получения конкретного объявления
обязательные поля в ответе: название объявления, цена, ссылка на главное фото
опциональные поля (можно запросить, передав параметр fields): описание, ссылки на все фото

Метод создания объявления:
принимает все вышеперечисленные поля: название, описание, несколько ссылок на фотографии (сами фото загружать никуда не требуется), цена
возвращает ID созданного объявления и код результата (ошибка или успех)
