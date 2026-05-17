import { Book } from "../types";
import { books } from "../data/books";

export function addBook(book: Book): void {
  books.push(book);
  console.log(`Buku "${book.title}" berhasil ditambahkan.`);
}

export function listBooks(): void {
  if (books.length === 0) {
    console.log("Belum ada buku di koleksi.");
    return;
  }

  console.log(`Daftar buku (${books.length}):`);
  books.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`);
  });
}

export function searchBook(title?: string): void {
  if (!title) {
    console.log("Tidak ada kata kunci. Menampilkan semua buku:");
    listBooks();
    return;
  }

  const keyword = title.toLowerCase();
  const hasil = books.filter((book) => book.title.toLowerCase().includes(keyword));

  if (hasil.length === 0) {
    console.log(`Tidak ada buku yang cocok dengan "${title}".`);
    return;
  }

  console.log(`Hasil pencarian untuk "${title}":`);
  hasil.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`);
  });
}
