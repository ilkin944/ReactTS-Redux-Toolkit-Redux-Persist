# React Typescript layihəsində Redux Toolkit və Redux Persist istifadəsi

Bu repository içərisində Typescript React ilə birlikdə Redux SM istifadəsi üçün kod nümunəsi yer alır. İstifadə etmək üçün sağ yuxarı küncdə yer alan "Use this template" düyməsinə klikləyərək bu repositoryni template kimi istifadə edə bilərsiniz. Yaxud repository url koplayalaraq lokalda işləyə bilərsiniz

```shell
git clone https://github.com/ilkin944/ReactTS-Redux-Toolkit-Redux-Persist
cd ReactTS-Redux-Toolkit-Redux-Persist
pnpm install
pnpm run dev
```

və yaxud 0-dan yeni Vite React proyekti yaradaraq davam edə bilərsiniz

```shell
mkdir proyektAdi
cd proyektAdi
pnpm create vite@latest
```

Proyekt üçün ad təyin edib, React və Typescript seçimlərini etməlisiniz.

```shell
pnpm install
pnpm run dev
```

Növbəti addımda, layihəmizə React-Redux, Redux Toolkit və Redux Persist paketlərini yükləmək lazımdır.

```shell
pnpm install react-redux @reduxjs/toolkit redux-persist
```

Yüklənmə bitdikdən sonra, layihəmizin **src/** qovluğu daxilində yeni **redux** adlı qovluq yaradırıq. Bu qovluq daxilində isə **index.ts**, **hooks.ts**, **lib/** yaradırıq.

*Redux* qovluğu daxilindəki, *index.ts* faylı store yaradılması və quraşdırılma üçün istifadə edəcəyik.
*Redux* qovluğu daxilindəki, *hooks.ts* faylı bizim öz **useAppSelector** və **useAppDispatch** hooklarımızı yaradıb istifadə etmək üçündür
*Redux* qovluğu daxilindəki, *lib/* qovluğu, Redux slicelar quraşdırmaq üçündür. (istəyə bağlı olaraq bu qovluğun adını features, slices kimi də adlandıra bilərsiniz).

Layihənin əsas qovluğunda .env faylı yaradaraq içərisində hazırki işlədiyimiz development mühitini təyin edirik.

İstəyə bağlı olaraq Redux Persistin, ProviderGate komponenti üçün loading={null} və ya Loading komponentinizi təyin edə bilərsiniz.