import profile from "../../assets/images/Cindy-Campbell.jpeg";

export default function Main() {
  return (
    <main class="content">
      <section class="profile page__section">
        <div class="profile__image-container">
          <img class="profile__image" src={profile} alt="Imágen de perfil" />
          <div class="profile__image-edit"></div>
        </div>
        <div class="profile__info">
          <h1 class="profile__title">Cindy Campbell</h1>
          <button class="profile__edit-button" type="button"></button>
          <p class="profile__description">Reportera</p>
        </div>
        <button class="profile__add-button" type="button"></button>
      </section>
    </main>
  );
}
