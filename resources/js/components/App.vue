<template>
    <nav>
        <div class="flex flex-wrap justify-between border-l-indigo-900 shadow-lg px-10 py-2 items-center">
            <h1 class="text-2xl font-bold">Dimas</h1>
            <div class="flex justify-evenly gap-4">
                <ul class="flex space-x-8">
                    <li>
                        <router-link to="/" class="text-2xl font-bold">Tes</router-link>
                    </li>
                    <li>
                        <router-link to="/profile" class="text-2xl font-bold">Set</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <RouterView/>
</template>