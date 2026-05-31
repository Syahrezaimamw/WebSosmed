# Laporan Project React JS - Cris MedSos

## Identitas Project

**Nama Project:** Cris MedSos - Simple Social Media Directory  
**Framework:** React JS  
**API:** https://jsonplaceholder.typicode.com/users

---

# A. Deskripsi Project

Project ini merupakan website sederhana berbasis React JS yang menampilkan daftar pengguna layaknya sosial media sederhana.

Data user diambil dari API JSONPlaceholder dan ditampilkan dalam bentuk card. Pengguna dapat melakukan pencarian user, memberikan Like, Follow, serta melihat detail informasi user melalui modal.

---

# B. Fitur yang Diimplementasikan

## 1. Install react dengan Mengunakan cara berikut

```txt
npm create vite@latest my-project
```
Instal Tailwind untuk styling aplikasi: 
```txt
npm install tailwindcss @tailwindcss/vite
```

Data yang ditampilkan:

- Nama User
- Username
- Email
- Company
- Kota

Data diperoleh dari API:

```txt
https://jsonplaceholder.typicode.com/users
```

---

## 2. Fetch API Menggunakan useEffect

Data user diambil ketika aplikasi pertama kali dijalankan menggunakan React Hook `useEffect`.

### Implementasi

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      setUsers(data);
      setFilteredUsers(data);
    });
}, []);
```

### Penjelasan

- `fetch()` digunakan untuk mengambil data dari API.
- Data diubah ke format JSON menggunakan `.json()`.
- Data disimpan ke state `users`.
- Data juga disimpan ke `filteredUsers` untuk kebutuhan fitur pencarian.

---

# C. Struktur Component

Project dipisah menjadi beberapa component agar lebih rapi dan mudah dikelola.

cris-medsos
│
├── src
│   │
│   ├── App.jsx
│   │
│   ├── components
│   │   │
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── UserCard.jsx
│   │   ├── Modal.jsx
│   │   └── Footer.jsx
│   │
│   ├── context
│   │   │
│   │   └── UserContext.jsx
│   │
│   ├── assets
│   │   │
│   │   ├── hero1.jpg
│   │   ├── hero2.jpg
│   │   │
│   │   └── icon
│   │       │
│   │       ├── building.png
│   │       ├── email.png
│   │       ├── magnifying-glass.png
│   │       ├── placeholder.png
│   │       └── user (1).png
│   │
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── index.html
└── README.md
   
## Dengan Beberapa Penjelasan isi file sebagai berikut :
## 1. Navbar.jsx

Berfungsi sebagai bagian navigasi atas aplikasi.

### Fungsi

- Menampilkan logo aplikasi.
- Menampilkan tombol Login dan Sign Up. (dummy)

```jsx
<Navbar />
```

---

## 2. Hero.jsx

Berfungsi sebagai tampilan landing page/banner utama.

### Fungsi

- Menampilkan slogan aplikasi.
- Menampilkan gambar hero.
- Menampilkan tombol Call To Action. (dummy)

```jsx
<Hero />
```

---

## 3. UserCard.jsx

Berfungsi untuk menampilkan informasi setiap user.

### Data yang ditampilkan

- Nama
- Username
- Company
- City
- Email


### Fitur

- Like
- Follow
- Lihat Detail

```jsx
<UserCard
  key={user.id}
  user={user}
  onClick={setSelectedUser}
/>
```

---

## 4. Modal.jsx

Berfungsi menampilkan detail user.

### Informasi yang ditampilkan

- Nama
- Username
- Email
- Phone
- Website
- Street
- Suite
- City
- Zipcode
- Latitude
- Longitude
- Company Name
- Company Catch Phrase
- Company Business

```jsx
<Modal
  user={selectedUser}
  onClose={() => setSelectedUser(null)}
/>
```

---

## 5. Footer.jsx

Berfungsi sebagai bagian footer website.

```jsx
<Footer />
```

---

## 6. UserContext.jsx

Berfungsi mengelola state global Like dan Follow menggunakan Context API.

```jsx
<UserContext.Provider
  value={{
    likedUsers,
    followedUsers,
    toggleLike,
    toggleFollow
  }}
>
```

---

# D. Implementasi React Hook

Project ini menggunakan seluruh hook yang diwajibkan.

---

## 1. useState

Hook `useState` digunakan untuk menyimpan dan mengelola data yang dapat berubah selama aplikasi berjalan. Pada project ini, `useState` digunakan di dua file yaitu `App.jsx` dan `UserContext.jsx`.

### A. useState pada App.jsx

Pada `App.jsx`, `useState` digunakan untuk mengelola data utama aplikasi.

```jsx
const [users, setUsers] = useState([]);
const [selectedUser, setSelectedUser] = useState(null);
const [filteredUsers, setFilteredUsers] = useState([]);
```

**Penjelasan:**

- `users` digunakan untuk menyimpan seluruh data user yang diperoleh dari API.
- `selectedUser` digunakan untuk menyimpan user yang dipilih dan akan ditampilkan pada komponen Modal.
- `filteredUsers` digunakan untuk menyimpan hasil pencarian user yang ditampilkan pada daftar UserCard.

Contoh penggunaan:

```jsx
setUsers(data);
setFilteredUsers(data);
```

```jsx
onClick={setSelectedUser}
```

```jsx
{selectedUser && (
  <Modal
    user={selectedUser}
    onClose={() => setSelectedUser(null)}
  />
)}
```

---

### B. useState pada UserContext.jsx

Pada `UserContext.jsx`, `useState` digunakan untuk menyimpan state global yang dapat diakses oleh seluruh komponen menggunakan Context API.

```jsx
const [likedUsers, setLikedUsers] = useState([]);
const [followedUsers, setFollowedUsers] = useState([]);
```

**Penjelasan:**

- `likedUsers` digunakan untuk menyimpan daftar ID user yang telah diberi Like.
- `followedUsers` digunakan untuk menyimpan daftar ID user yang telah di-Follow.

Contoh implementasi:

```jsx
const toggleLike = (id) => {
  setLikedUsers((prev) =>
    prev.includes(id)
      ? prev.filter((i) => i !== id)
      : [...prev, id]
  );
};
```

```jsx
const toggleFollow = (id) => {
  setFollowedUsers((prev) =>
    prev.includes(id)
      ? prev.filter((i) => i !== id)
      : [...prev, id]
  );
};
```

Dengan Context API, status Like dan Follow dapat digunakan oleh komponen `UserCard` tanpa perlu mengirim props secara berulang (prop drilling).

### Ringkasan Penggunaan useState

| File | State | Fungsi |
|--------|--------|---------|
| App.jsx | users | Menyimpan data user dari API |
| App.jsx | selectedUser | Menyimpan user yang dipilih untuk ditampilkan di Modal |
| App.jsx | filteredUsers | Menyimpan hasil pencarian user |
| UserContext.jsx | likedUsers | Menyimpan daftar user yang di-Like |
| UserContext.jsx | followedUsers | Menyimpan daftar user yang di-Follow |

## 2. useEffect

Digunakan untuk menjalankan proses fetch API saat component pertama kali dirender.

### Contoh

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      setUsers(data);
      setFilteredUsers(data);
    });
}, []);
```

### Fungsi

- Mengambil data dari API.
- Menampilkan data ke halaman.

---

## 3. useContext (Context API)

Pada project ini, `useContext` digunakan untuk mengelola fitur **Like** dan **Follow** secara global menggunakan Context API.

Tanpa Context API, data Like dan Follow harus dikirim dari `App.jsx` ke `UserCard.jsx` melalui props. Jika jumlah component semakin banyak, proses pengiriman props menjadi lebih rumit (prop drilling).

Dengan Context API, data dapat diakses langsung oleh component yang membutuhkan tanpa harus melewati banyak props.

---

### A. Membuat Context

Pertama, dibuat sebuah context bernama `UserContext`.

```jsx
export const UserContext = createContext();
```

Fungsi:

- Membuat tempat penyimpanan data global.
- Data dapat digunakan oleh seluruh component yang berada di dalam `UserProvider`.

---

### B. Membuat Provider

Provider digunakan untuk membungkus seluruh aplikasi agar data global dapat diakses oleh component di dalamnya.

```jsx
<UserContext.Provider
  value={{
    likedUsers,
    followedUsers,
    toggleLike,
    toggleFollow
  }}
>
  {children}
</UserContext.Provider>
```

Fungsi:

- Menyediakan data global ke seluruh component.
- Mengirim state dan function melalui properti `value`.

Data yang dibagikan:

| Data | Fungsi |
|--------|---------|
| likedUsers | Menyimpan daftar user yang di-Like |
| followedUsers | Menyimpan daftar user yang di-Follow |
| toggleLike() | Menambah atau menghapus Like |
| toggleFollow() | Menambah atau menghapus Follow |

---

### C. Membungkus Aplikasi dengan UserProvider

Pada `App.jsx`, seluruh aplikasi dibungkus menggunakan `UserProvider`.

```jsx
<UserProvider>
  <div className="bg-gray-50 min-h-screen">
    <Navbar />
    <Hero />
    ...
  </div>
</UserProvider>
```

Fungsi:

- Memberikan akses Context API kepada seluruh component.
- Component seperti `UserCard` dapat menggunakan data Like dan Follow tanpa menerima props dari App.jsx.

---

### D. Mengakses Context dengan useContext

Pada `UserCard.jsx`, data dari Context diambil menggunakan hook `useContext`.

```jsx
const {
  toggleLike,
  toggleFollow,
  likedUsers,
  followedUsers
} = useContext(UserContext);
```

Fungsi:

- Mengambil state global dari UserContext.
- Mengakses fungsi Like dan Follow.
- Mengakses daftar user yang telah di-Like atau di-Follow.

---

### E. Implementasi Fitur Like

State Like disimpan pada array `likedUsers`.

```jsx
const [likedUsers, setLikedUsers] = useState([]);
```

Ketika tombol Like ditekan:

```jsx
const toggleLike = (id) => {
  setLikedUsers((prev) =>
    prev.includes(id)
      ? prev.filter((i) => i !== id)
      : [...prev, id]
  );
};
```

Cara kerja:

- Jika ID user sudah ada dalam array → Like dihapus.
- Jika ID user belum ada → Like ditambahkan.

Status Like dicek menggunakan:

```jsx
const liked = likedUsers.includes(user.id);
```

---

### F. Implementasi Fitur Follow

State Follow disimpan pada array `followedUsers`.

```jsx
const [followedUsers, setFollowedUsers] = useState([]);
```

Ketika tombol Follow ditekan:

```jsx
const toggleFollow = (id) => {
  setFollowedUsers((prev) =>
    prev.includes(id)
      ? prev.filter((i) => i !== id)
      : [...prev, id]
  );
};
```

Cara kerja:

- Jika user sudah di-Follow → status Follow dihapus.
- Jika user belum di-Follow → user ditambahkan ke daftar Follow.

Status Follow dicek menggunakan:

```jsx
const followed = followedUsers.includes(user.id);
```

---

### Alur Kerja Context API

```txt
UserProvider
      │
      ▼
UserContext
      │
      ├── likedUsers
      ├── followedUsers
      ├── toggleLike()
      └── toggleFollow()
               │
               ▼
          UserCard
               │
      ├── Like Button
      └── Follow Button
```

### Kesimpulan

Context API digunakan untuk mengelola state global fitur Like dan Follow. Dengan penggunaan `useContext`, komponen `UserCard` dapat langsung mengakses data dan fungsi yang berada di `UserContext` tanpa perlu mengirim props dari `App.jsx`, sehingga struktur kode menjadi lebih rapi, mudah dikelola, dan scalable.

## 4. useRef

Digunakan untuk mengakses nilai input pencarian secara langsung.

### Deklarasi

```jsx
const searchRef = useRef();
```

### Implementasi Search

```jsx
const handleSearch = () => {
  const keyword = searchRef.current.value.toLowerCase();

  const result = users.filter((user) =>
    user.name.toLowerCase().includes(keyword)
  );

  setFilteredUsers(result);
};
```

### Fungsi

- Mengambil nilai input tanpa membuat state baru.
- Digunakan untuk fitur Search User.

---

# E. Implementasi Interaktivitas Website

Salah satu tujuan project ini adalah membuat tampilan sosial media sederhana yang tidak hanya menampilkan data, tetapi juga memungkinkan pengguna berinteraksi dengan data yang tersedia.

Pada project **Cris MedSos**, terdapat tiga fitur interaktif utama yaitu **Search User**, **Like User**, **Follow User**, dan **Detail User (Modal)**.

---

## 1. Search User

Fitur Search digunakan untuk mencari user berdasarkan nama secara realtime.

### Implementasi

Input pencarian menggunakan hook `useRef` untuk mengambil nilai dari textbox.

```jsx
const searchRef = useRef();
```

```jsx
<input
  ref={searchRef}
  onChange={handleSearch}
  placeholder="Search user..."
/>
```

Ketika pengguna mengetik pada kolom pencarian, fungsi `handleSearch()` akan dijalankan.

```jsx
const handleSearch = () => {
  const keyword = searchRef.current.value.toLowerCase();

  const result = users.filter((user) =>
    user.name.toLowerCase().includes(keyword)
  );

  setFilteredUsers(result);
};
```

### Cara Kerja

1. Pengguna mengetik nama pada kolom pencarian.
2. Nilai input dibaca menggunakan `searchRef`.
3. Data user difilter berdasarkan nama yang mengandung kata kunci.
4. Hasil pencarian disimpan ke `filteredUsers`.
5. Tampilan UserCard akan berubah sesuai hasil pencarian.

### Contoh

Jika pengguna mengetik:

```txt
Leanne
```

Maka hanya user yang memiliki nama **Leanne Graham** yang akan ditampilkan.

---

## 2. Like User

Fitur Like memungkinkan pengguna memberikan tanda suka pada user tertentu.

### Implementasi

Tombol Like berada pada komponen `UserCard`.

```jsx
<button onClick={() => toggleLike(user.id)}>
  {liked ? "Liked" : "Like"}
</button>
```

Status Like disimpan pada Context API.

```jsx
const [likedUsers, setLikedUsers] = useState([]);
```

Fungsi untuk menambah atau menghapus Like:

```jsx
const toggleLike = (id) => {
  setLikedUsers((prev) =>
    prev.includes(id)
      ? prev.filter((i) => i !== id)
      : [...prev, id]
  );
};
```

### Cara Kerja

1. Pengguna menekan tombol Like.
2. ID user disimpan ke dalam array `likedUsers`.
3. Jika tombol ditekan kembali, ID user akan dihapus dari array.
4. Tampilan tombol berubah menjadi "Liked".
5. Ikon hati berubah warna menjadi merah sebagai indikator Like aktif.

### Hasil Interaksi

```txt
Sebelum diklik:
♡ Like

Sesudah diklik:
♥ Liked
```

---

## 3. Follow User

Fitur Follow digunakan untuk mengikuti atau berhenti mengikuti user.

### Implementasi

```jsx
<button onClick={() => toggleFollow(user.id)}>
  {followed ? "Following" : "Follow"}
</button>
```

Data Follow disimpan menggunakan Context API.

```jsx
const [followedUsers, setFollowedUsers] = useState([]);
```

Fungsi Follow:

```jsx
const toggleFollow = (id) => {
  setFollowedUsers((prev) =>
    prev.includes(id)
      ? prev.filter((i) => i !== id)
      : [...prev, id]
  );
};
```

### Cara Kerja

1. Pengguna menekan tombol Follow.
2. ID user disimpan pada array `followedUsers`.
3. Status tombol berubah dari "Follow" menjadi "Following".
4. Jika tombol ditekan kembali, status kembali menjadi "Follow".

### Hasil Interaksi

```txt
Sebelum diklik:
Follow

Sesudah diklik:
Following
```

---

## 4. Melihat Detail User (Modal)

Fitur ini memungkinkan pengguna melihat informasi lengkap user tanpa berpindah halaman.

### Implementasi

Tombol Detail:

```jsx
<button onClick={() => onClick(user)}>
  Lihat Detail →
</button>
```

Ketika tombol ditekan:

```jsx
onClick={setSelectedUser}
```

Data user yang dipilih akan disimpan pada state:

```jsx
const [selectedUser, setSelectedUser] = useState(null);
```

Modal ditampilkan secara kondisional:

```jsx
{selectedUser && (
  <Modal
    user={selectedUser}
    onClose={() => setSelectedUser(null)}
  />
)}
```

### Cara Kerja

1. Pengguna menekan tombol **Lihat Detail**.
2. Data user dikirim ke state `selectedUser`.
3. Komponen Modal muncul di atas halaman.
4. Informasi lengkap user ditampilkan.
5. Pengguna dapat menutup modal dengan tombol **Tutup**.

### Informasi yang Ditampilkan

#### Contact

- Email
- Phone
- Website

#### Address

- Street
- Suite
- City
- Zipcode
- Latitude
- Longitude

#### Company

- Company Name
- Catch Phrase
- Business Description

---



## Ringkasan Interaktivitas

| Fitur | Fungsi |
|---------|---------|
| Search User | Mencari user berdasarkan nama |
| Like User | Memberikan atau menghapus Like |
| Follow User | Mengikuti atau berhenti mengikuti user |
| Detail User | Menampilkan informasi lengkap user dalam Modal |


Dengan fitur-fitur tersebut, website tidak hanya menampilkan data dari API, tetapi juga memberikan pengalaman interaktif yang menyerupai aplikasi sosial media sederhana sesuai dengan ketentuan tugas.


# H. Kesimpulan

Project **Cris MedSos** telah memenuhi seluruh ketentuan tugas:

✅ Instalasi React berhasil  
✅ Data user diambil menggunakan Fetch API dan useEffect  
✅ Component dipisah dengan rapi (Navbar, Hero, UserCard, Modal, Footer)  
✅ Menggunakan React Hook:
- useState
- useEffect
- useContext
- useRef

✅ Memiliki fitur:
- Search User
- Like User
- Follow User
- Detail User

✅ Dokumentasi project lengkap dengan penjelasan dan potongan kode

---

**Nama Project:** Cris MedSos  
**Teknologi:** React JS + Context API + Tailwind CSS + Fetch API  
**API Source:** JSONPlaceholder Users API